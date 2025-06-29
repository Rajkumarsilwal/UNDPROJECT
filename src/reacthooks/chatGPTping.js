import { useEffect } from 'react';

export default function useWarmupPing() {
    useEffect(() => {
        fetch('https://chatgptapi-8lgp.onrender.com/warmup').catch(() => { });
    }, []);
}