import { useMediaQuery } from 'react-responsive';

export default function MobileMenu() {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <div>
            {isMobile ? (
                <div className="card-shadow cursor-pointer">
                    {/* Content for mobile menu */}
                </div>
            ) : (
                <div className="card-shadow cursor-pointer transition hover:scale-125">
                    {/* Content for non-mobile menu */}
                </div>
            )}
        </div>
    );
}