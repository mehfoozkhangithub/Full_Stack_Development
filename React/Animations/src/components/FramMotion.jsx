
import { motion } from "framer-motion";

export function FramerMotionExample() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
                fontSize: "24px",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "40px",
            }}
        >
            Hello, this fades in!
        </motion.div>
    );
}
