
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { motion } from "framer-motion"
import { textVariant } from "../utils/motion"
import { styles } from "../styles"

const Tech = () => {
  return (
    <>
     <motion.div variants={textVariant()}>   {/* for animation */}
        
        <h2 className={styles.sectionHeadText}>
          Technologies known
        </h2>
      </motion.div>

   <div className="flex flex-row flex-wrap mt-10
   justify-center gap-10">
   {technologies.map((technology) => (
    <div className="w-28 h-28" 
    key={technology.name}>
     <img 
      src={technology.icon}
     />
    </div>
   ))}

   </div>
   </>
  )
}

export default SectionWrapper(Tech,"tech");