import { Bars3Icon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const ToggleButton = ({ setOpen, open }) => {
    return (
        <motion.button
            onClick={() => setOpen(!open)}
            initial={false}
            animate={{ rotate: open ? 0 : 1 }}
            transition={{ duration: 0.2 }}
        >
            {open ? <XMarkIcon className="icon" /> : <Bars3Icon className="icon" />}
        </motion.button>
    );
};

export default ToggleButton;
