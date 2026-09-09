"use client";

export function FAQSchema() {
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Who is Eedara Sai Deep?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Eedara Sai Deep is a Full-Stack Developer and Backend Engineer studying Computer Science & Engineering (Data Science) at NIIT University, Neemrana. He has extensive experience in Java 17, Spring Boot, Python, React, PostgreSQL, Redis Streams, Docker, and interpretable Machine Learning."
                }
            },
            {
                "@type": "Question",
                "name": "What technologies does Eedara Sai Deep specialize in?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Eedara Sai Deep specializes in Java, Spring Boot, Python, React.js, Node.js, Express.js, PostgreSQL, MongoDB, Redis, Redis Streams, Docker, AWS EC2, Jenkins, GitHub Actions, Scikit-learn, XGBoost, SHAP, and LIME."
                }
            },
            {
                "@type": "Question",
                "name": "How can I contact Eedara Sai Deep?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can reach Eedara Sai Deep via email at saideepeedara27@gmail.com, phone at +91 7893359490, or through his GitHub profile at https://github.com/saideepeedara27-alt."
                }
            },
            {
                "@type": "Question",
                "name": "What notable projects has Eedara Sai Deep engineered?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Notable projects include an Explainable AI Crop Recommendation System with 99.55% accuracy using hybrid ensemble models, Kisan Connect farm-to-customer MERN marketplace deployed on AWS with Docker, and AQI Trends real-time analytics with ARIMA forecasting."
                }
            },
            {
                "@type": "Question",
                "name": "Where is Eedara Sai Deep located?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Eedara Sai Deep is currently based at NIIT University, Neemrana, India and is available for software engineering internships, full-stack, and backend developer opportunities."
                }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
    );
}
