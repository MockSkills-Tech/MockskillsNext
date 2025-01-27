import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is Mockskills?",
            answer:
                "Mockskills is a platform offering courses, mock interviews, projects, and community support to help individuals improve their skills and advance their careers.",
        },
        {
            question: "How do I get started with Mockskills?",
            answer:
                "Simply sign up and explore courses, mock interviews, and community features. You can also join projects and participate in challenges to enhance your skills.",
        },
        {
            question: "Are the courses on Mockskills free?",
            answer:
                "Currently, Mockskills is free, but we’re working on adding new features, and some may require a subscription in the future.",
        },
        {
            question: "What is the BattleGround feature?",
            answer:
                "BattleGround allows you to participate in challenges and contests to test your skills in a fun and competitive way.",
        },
        {
            question: "Can I interact with other users on Mockskills?",
            answer:
                "Yes! You can connect with peers, collaborate on projects, and get support through our CollabZone community.",
        },
        {
            question: "What are the benefits of Mockskills for my career?",
            answer:
                "Mockskills helps you develop new skills, gain real-world experience, and connect with professionals to boost your career.",
        },
    ];
    

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-[80%] mx-auto p-2 m-2 sm:p-14 rounded-3xl shadow-lg">
            {/* Header */}
            <h1 className="text-3xl lg:text-4xl font-extrabold text-center mb-8 leading-tight">
                <span style={{ color: '#FF6347' }} className="inline-block mr-2">Frequently</span>
                <span style={{ color: '#4682B4' }} className="inline-block mr-2">Asked</span>
                <span style={{ color: '#32CD32' }} className="inline-block">Questions</span>
            </h1>

            {/* FAQ List */}
            <div className="space-y-2">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`border dark:border-gray-700 border-gray-200 rounded-lg p-2 bg-transparent shadow-sm transition-transform duration-300 ${activeIndex === index ? "scale-105" : "scale-100"
                            }`}
                        role="region"
                        aria-labelledby={`faq-${index}`}
                        aria-expanded={activeIndex === index ? "true" : "false"}
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="flex justify-between items-center w-full text-left"
                            aria-controls={`answer-${index}`}
                            id={`faq-${index}`}
                            aria-expanded={activeIndex === index ? "true" : "false"}
                        >
                            {/* Question */}
                            <h2 className="text-sm md:text-sm   text-gray-700">
                                {faq.question}
                            </h2>

                            {/* Plus/Minus Icon */}
                            <span className="text-sm text-blue-300">
                                {activeIndex === index ? <FaMinus /> : <FaPlus />}
                            </span>
                        </button>

                        {/* Answer */}
                        {activeIndex === index && (
                            <div
                                id={`answer-${index}`}
                                className="mt-4 text-sm lg:text-base text-gray-600 transition-opacity duration-500 ease-in-out leading-relaxed"
                                role="region"
                                aria-live="polite"
                            >
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;