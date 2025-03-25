'use client'
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimateNumber() {
    const [count, setCount] = useState(0);
    const [direction, setDirection] = useState(1); // 1 — вниз, -1 — вверх

    const updateCount = (value: number) => {
        setDirection(value > count ? 1 : -1);
        setCount(value);
    };
    const variants = {
        enter: (direction: number) => ({
            y: direction * -30,
            opacity: 0,
        }),
        center: {
            y: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            y: direction * 30,
            opacity: 0,
        }),
    };
    return (
        <div className="flex flex-col items-center space-y-4 h-screen justify-center">
            <div className="relative h-10 w-10 overflow-hidden text-2xl font-bold flex items-center justify-center">
                <AnimatePresence mode="popLayout" custom={direction}>
                    <motion.span
                        key={count}
                        custom={direction} // Передаем direction внутрь motion
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.2 }}
                        className=""
                    >
                        {count}
                    </motion.span>
                </AnimatePresence>
            </div>
            <div className="flex space-x-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => updateCount(count + 1)}
                >
                    +
                </button>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded"
                    onClick={() => updateCount(count - 1)}
                >
                    -
                </button>
            </div>
        </div>
    );
}
