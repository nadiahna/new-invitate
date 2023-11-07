import React from 'react';

interface Props {
    children: React.ReactNode;
}

const FadeInSection: React.FC<Props> = ({ children }) => {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(`entry`, entry, `is = ${entry.isIntersecting}`);
                setVisible(entry.isIntersecting);
            });
        });

        const current = domRef.current;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, []);

    return (
        <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
            {children}
        </div>
    );
};

export default FadeInSection;



