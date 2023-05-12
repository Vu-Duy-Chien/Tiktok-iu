import classNames from "classnames/bind";
import styles from './Authen.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useEffect, useRef, useState } from "react";
import { useStore, actions } from '~/store';


const cx = classNames.bind(styles)

function Authen() {
    const [state, dispatch] = useStore()
    const { authen } = state

    const [usernameValue, setUsernameValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [showPassText, setShowPassText] = useState(false)
    const [signupOrLogin, setSignupOrLogin] = useState(true)
    const [disabledButton, setDisableButton] = useState(true)
    const [enterText, setEnterText] = useState(true)
    const [errorMessage, setErrorMessage] = useState(false)

    const modalRef = useRef()
    const passwordRef = useRef()
    const contentContainer = useRef()

    const handleHidenModal = () => {
        dispatch(actions.hideModal())
        setSignupOrLogin(true)
    }

    useEffect(() => {
        if (authen && modalRef.current) {
            modalRef.current.classList.add(cx('show-modal'))
            contentContainer.current.classList.add(cx('content-container-show'))
        } else {
            modalRef.current.classList.remove(cx('show-modal'))
            contentContainer.current.classList.remove(cx('content-container-show'))
        }
    }, [authen])


    const handleGetUsername = e => {
        setUsernameValue(e.target.value)
        setEnterText(!enterText)
    }

    const handleGetPassword = e => {
        setPasswordValue(e.target.value)
        setEnterText(!enterText)
    }

    useEffect(() => {
        if (usernameValue.length > 0 && passwordValue.length > 0) {
            setDisableButton(false)
        } else if (usernameValue.length == 0 || passwordValue.length == 0) {
            setDisableButton(true)
        }

    }, [enterText])

    const handleShowHidePass = () => {
        if (passwordRef && !showPassText) {
            passwordRef.current.setAttribute("type", "text")
            setShowPassText(true)
        } else if (passwordRef && showPassText) {
            setShowPassText(false)
            passwordRef.current.setAttribute("type", "password")
        }

    }

    const handleSignupOrLogin = () => {
        setSignupOrLogin(!signupOrLogin)
        setUsernameValue('')
        setPasswordValue('')
        setDisableButton(true)
    }


    const handleLogin = e => {
        e.preventDefault()

        //logic
        if (!state.currentUser.status) {
            // signupOrLogin = false đang ở form đăng ký
            if (!signupOrLogin) {
                const listUsers = localStorage.getItem("listUsers");
                if (listUsers) {
                    let listUsersLocal = JSON.parse(listUsers)

                    if (!listUsersLocal.some(user => (user.username === usernameValue))) {
                        const lastID = listUsersLocal[listUsersLocal.length - 1].id
                        const newID = parseInt(lastID) + 1
                        listUsersLocal = [...listUsersLocal, {
                            id: newID,
                            username: usernameValue,
                            password: passwordValue,
                            follow: [],
                            liked: []
                        }]
                        listUsersLocal = JSON.stringify(listUsersLocal)
                        localStorage.setItem("listUsers", listUsersLocal);
                        setErrorMessage(false)
                        alert('Sign Up Success')
                        setSignupOrLogin(true)
                        setDisableButton(true)

                    } else {
                        setErrorMessage(true)
                    }
                } else {
                    localStorage.setItem("listUsers", `
                   [
                    { "id":1,
                    "username":"${usernameValue}",
                    "password":"${passwordValue}",
                    "follow":[],
                    "liked":[]}
                ]
                    `);
                    setErrorMessage(false)
                    alert('Sign Up Success')
                    setSignupOrLogin(true)
                    setDisableButton(true)
                }
            } else if (signupOrLogin) {
                // signupOrLogin = true đang ở form đăng nhập
                const listUsers = localStorage.getItem("listUsers");
                if (listUsers && listUsers.length > 0) {
                    const listUsersLocal = JSON.parse(listUsers)
                    const checkAccount = listUsersLocal.some(user => (user.username === usernameValue) && (user.password === passwordValue))
                    if (checkAccount) {
                        const [dataUser] = listUsersLocal.filter(user => user.username === usernameValue)

                        dispatch(actions.loginSuccess(dataUser))
                        dispatch(actions.hideModal())
                        setDisableButton(true)

                    } else {

                        alert('incorrect account')
                        setDisableButton(true)
                    }
                }
            }

        }



        setUsernameValue('')
        setPasswordValue('')
    }

    return <div className={cx('wrapper')} ref={modalRef}>
        <div className={cx('modal-mask')}>
        </div>
        <div className={cx('content-container')} ref={contentContainer}>
            <div className={cx('modal-content')}>
                <div className={cx('login-scroll')}>
                    <div className={cx('login-container')}>
                        <h2 className={cx('login-title')}>{signupOrLogin ? 'Log in' : 'Sign up'}</h2>
                        <div className={cx('description')}>Email or username <Link to={'/'} className={cx('link-text')}>Log in with phone</Link></div>
                        <form>
                            <input onChange={handleGetUsername} value={usernameValue} type="text" className={cx('username')} placeholder="Email or username"></input>
                            <div className={cx('password-wrap')}>
                                <input ref={passwordRef} onChange={handleGetPassword} value={passwordValue} type="password" placeholder="Password"
                                    className={cx('password')}
                                ></input>
                                <div className={cx('pass-showhide')} onClick={handleShowHidePass}>

                                    {
                                        showPassText ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />
                                    }

                                </div>
                            </div>
                            {errorMessage && <p className={cx('error-message')}>The account is already in use</p>}

                            <Link to={'/'} className={cx('link-text')}>Forgot password?</Link>
                            <Button onClick={handleLogin} disabled={disabledButton} type="submit" className={cx('login-btn')}>{signupOrLogin ? 'Log in' : 'Sign up'}</Button>
                        </form>
                    </div>

                </div>
                <div className={cx('modal-footer')}>
                    {signupOrLogin ? `Don't have an account?` : `Already have an account?`}


                    <span className={cx('sign-up')} onClick={handleSignupOrLogin}>{signupOrLogin ? 'Sign up' : 'Log in'}</span>

                </div>
            </div>
            <div className={cx('modal-close-button')} onClick={handleHidenModal}>
                <FontAwesomeIcon icon={faXmark} className={cx('close-icon')} />
            </div>
        </div>
    </div>
}

export default Authen;