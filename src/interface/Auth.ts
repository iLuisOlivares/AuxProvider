import { useState } from "react";

export interface auth {
    conectado: boolean;
    token: string;
    usuario_id: number;
    usuario_email: string;

  }


  export function getStorageValue(key: string, defaultValue: auth) {
    const saved = localStorage.getItem(key);
    const initial = saved != null ? JSON.parse(saved) : defaultValue;
    console.log(initial);
    return initial;
  }

 