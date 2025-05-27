import { twMerge } from "tailwind-merge"
import { motion } from "framer-motion";
const Button = ({ children, variant = "primary", className }) => {

  const buttonVariants = {
    hover: {
      scale: 1.04,
      transition: {
        type: "spring",
        stiffness: "300",
        dampimg: 7,
      },
    },
    tap: {
      scale: 0.9,
    },
  };

  const variants = {
    primary: "bg-blue-400 text-white/90 border-none hover:bg-blue-700",
    outline: "bg-transparent text-blue-300 border-2 border-blue-300 hover:bg-blue-500 hover:text-white"
  }
  return (
    <motion.button className={twMerge(`rounded-full px-4 py-2 font-semibold ${variants[variant]}`, 
      className
    )}
    variants={buttonVariants}
    whileHover="hover"
    whileTap="tap"
    >
      {children}
    </motion.button>
  )
}

export default Button
