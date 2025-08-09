import React from 'react';
import {motion} from 'framer-motion';
import {BookOpen, Users, Theater, Sparkles} from 'lucide-react';
import {useLanguage} from '../contexts/LanguageContext';
import {useTranslation} from '../hooks/useTranslation';

const About: React.FC = () => {
    const {isRTL} = useLanguage();
    const {t} = useTranslation();

    const features = [
        {
            icon: BookOpen,
            title: isRTL ? 'أرشيف رقمي' : 'Digital Archive',
            description: isRTL
                ? 'نحفظ النصوص المسرحية في أرشيف رقمي آمن ومنظم'
                : 'We preserve theatrical scripts in a secure and organized digital archive'
        },
        {
            icon: Users,
            title: isRTL ? 'مجتمع الكتّاب' : 'Writers Community',
            description: isRTL
                ? 'نربط بين الكتّاب الشباب والمخرجين والمهتمين بالمسرح'
                : 'We connect young writers with directors and theater enthusiasts'
        },
        {
            icon: Theater,
            title: isRTL ? 'منصة النشر' : 'Publishing Platform',
            description: isRTL
                ? 'نوفر مساحة آمنة لنشر الأعمال المسرحية الإبداعية'
                : 'We provide a safe space for publishing creative theatrical works'
        },
        {
            icon: Sparkles,
            title: isRTL ? 'دعم المواهب' : 'Talent Support',
            description: isRTL
                ? 'نساعد المواهب الشابة على الوصول لجمهور أوسع'
                : 'We help young talents reach a wider audience'
        }
    ];

    return (
        <section id="about" className="py-20 bg-theme-bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                    className="text-center mb-16"
                >
                    <h2 className={`text-4xl md:text-5xl font-bold text-theme-text-primary mb-6 ${isRTL ? 'font-arabic' : 'font-latin'}`}>
                        {t('aboutTitle')}
                    </h2>
                    <div
                        className="w-24 h-1 bg-gradient-to-r from-theme-accent-primary to-theme-accent-secondary mx-auto mb-8"/>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Text Content */}
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="space-y-6"
                    >
                        <p className={`text-lg leading-relaxed text-theme-text-secondary ${isRTL ? 'font-arabic text-right' : 'font-latin'}`}>
                            {t('aboutDescription')}
                        </p>

                        <div className="border-l-4 border-theme-accent-secondary pl-6 my-8">
                            <h3 className={`text-2xl font-semibold text-theme-text-primary mb-4 ${isRTL ? 'font-arabic' : 'font-latin'}`}>
                                {t('ourMission')}
                            </h3>
                            <p className={`text-theme-text-secondary leading-relaxed ${isRTL ? 'font-arabic' : 'font-latin'}`}>
                                {t('missionDescription')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Visual Element */}
                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="relative"
                    >
                        <div
                            className="relative bg-gradient-to-br from-theme-accent-primary/20 to-theme-accent-secondary/20 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="text-6xl text-theme-accent-secondary mb-4">
                                🎭
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-theme-accent-primary rounded-full"/>
                                    <span className={`text-theme-text-primary ${isRTL ? 'font-arabic' : 'font-latin'}`}>
                    {isRTL ? 'نصوص مسرحية متنوعة' : 'Diverse theatrical scripts'}
                  </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-theme-accent-secondary rounded-full"/>
                                    <span className={`text-theme-text-primary ${isRTL ? 'font-arabic' : 'font-latin'}`}>
                    {isRTL ? 'كتّاب مصريون شباب' : 'Young Egyptian writers'}
                  </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: index * 0.1}}
                            viewport={{once: true}}
                            whileHover={{y: -5}}
                            className="group bg-theme-bg-primary/50 backdrop-blur-sm rounded-xl p-6 border border-theme-border transition-all duration-300 hover:border-theme-accent-secondary/50"
                        >
                            <motion.div
                                whileHover={{scale: 1.1, rotate: 5}}
                                className="w-12 h-12 bg-gradient-to-br from-theme-accent-primary to-theme-accent-secondary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300"
                            >
                                <feature.icon className="w-6 h-6 text-white"/>
                            </motion.div>

                            <h3 className={`text-xl font-semibold text-theme-text-primary mb-3 ${isRTL ? 'font-arabic' : 'font-latin'}`}>
                                {feature.title}
                            </h3>

                            <p className={`text-theme-text-muted leading-relaxed ${isRTL ? 'font-arabic' : 'font-latin'}`}>
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;