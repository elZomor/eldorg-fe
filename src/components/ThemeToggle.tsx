import React from 'react';
import {motion} from 'framer-motion';
import {Sun, Moon} from 'lucide-react';
import {useTheme} from '../contexts/ThemeContext';
import {useLanguage} from '../contexts/LanguageContext';

const ThemeToggle: React.FC = () => {
    const {theme, actualTheme, setTheme} = useTheme();
    const {isRTL} = useLanguage();

    const themes = [
        {key: 'light' as const, icon: Sun, label: isRTL ? 'فاتح' : 'Light'},
        {key: 'dark' as const, icon: Moon, label: isRTL ? 'داكن' : 'Dark'},
    ];

    return (
        <div className="relative mx-3">
            <motion.div
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                className="flex items-center bg-theme-bg-secondary rounded-lg p-1 border border-theme-border"
            >
                {themes.map((themeOption) => {
                    const Icon = themeOption.icon;
                    const isActive = theme === themeOption.key;

                    return (
                        <motion.button
                            key={themeOption.key}
                            onClick={() => setTheme(themeOption.key)}
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            className={`
                relative flex items-center justify-center w-8 h-8 rounded-md transition-all duration-200
                ${isActive
                                ? 'bg-theme-accent-primary text-white shadow-sm'
                                : 'text-theme-text-muted hover:text-theme-text-primary hover:bg-theme-bg-tertiary'
                            }
              `}
                            aria-label={`${themeOption.label} theme`}
                            title={themeOption.label}
                        >
                            <Icon size={16}/>

                            {isActive && (
                                <motion.div
                                    layoutId="theme-indicator"
                                    className="absolute inset-0 bg-theme-accent-primary rounded-md -z-10"
                                    transition={{type: "spring", bounce: 0.2, duration: 0.6}}
                                />
                            )}
                        </motion.button>
                    );
                })}
            </motion.div>

            {/* Current theme indicator for screen readers */}
            <span className="sr-only">
        Current theme: {actualTheme === 'dark' ? (isRTL ? 'داكن' : 'Dark') : (isRTL ? 'فاتح' : 'Light')}
                {theme === 'system' && ` (${isRTL ? 'تلقائي' : 'Auto'})`}
      </span>
        </div>
    );
};

export default ThemeToggle;