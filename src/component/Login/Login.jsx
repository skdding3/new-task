import React, { useCallback, useState } from "react";
// import styled from "styled-components";
import "./login.scss"


// const Container = styled.div`
//   width: 100vh;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;
//
// const Form = styled.form`
//   display: flex;
//   align-items: space-around;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   flex-direction: column;
// `;
//
// const Input = styled.input`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-width: 20vh;
//   margin: 5px 10px 1px 3px;
//   border-top: none;
//   border-left: none;
//   border-right: none;
//   border-bottom: 1px solid;
// `;
//
// const Button = styled.button`
//   margin: 30px;
//   padding: 15px;
//   border: 2px solid;
//   background-color: white;
//   cursor: pointer;
//   font-weight: 700;
//
//   &:hover {
//     background-color: #f8f4f4;
//   }
// `;

let idValue = "";
let pwValue = "";


function LoginPrac() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");


    const loginValidate = (e) => {
        if(e.target.id == "id") {
            idValue = e.target.value
        } else {
            pwValue = e.target.value
        }
    }

    // const loginUser = useCallback(async (email, password) {
    //     setLoading(true);
    //     try {
    //         await singn
    //     }
    //   }, []);

    // const validationAccount = use;

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        // const email = data.get("password");
    });
    return (
        <container className="Container">
            <h2>Login</h2>
            <form className="Form">
                <input className="Input" id="id" onChange={loginValidate} placeholder="아이디" />
                <input className="Input" id="pw" type="password" placeholder="비밀번호" />
                <button className="Button">로그인</button>
            </form>
        </container>
    );
}

export default LoginPrac;
