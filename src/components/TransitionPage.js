import { motion } from "framer-motion";

const animationConfig = {
    start: { opacity: 0},
    stop: { opacity: 1},
    exit: { opacity: 0}
}
const TransitionPage = ({children}) => {
    return (
        <motion.div
        variants={animationConfig}
        initial='start'
        animate='stop'
        exit='exit'
        transition={{ duration: 1}}
        >
            {children}
        </motion.div>
    )
};

export default TransitionPage;