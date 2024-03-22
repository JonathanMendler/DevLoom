import axios, { Axios } from "axios";
import { useState } from "react";

const jwt = localstorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {}
