import axios from "axios";
import React from "react";

export const request = axios.create({baseURL:'https://fakestoreapi.com'})