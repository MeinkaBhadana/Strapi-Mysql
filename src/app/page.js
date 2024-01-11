"use client";
import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import Image from 'next/image';
import Posts from './posts/page';

export default function Home() {
 
  return (
    
    <main>
      <Posts/>
    </main>
  
  )
}
