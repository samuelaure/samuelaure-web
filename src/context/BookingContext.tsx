import { ReactNode, useState } from 'react';
import { BookingContext } from './BookingContextDefinition';

export const BookingProvider = ({ children }: { children: ReactNode }) => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    const openBooking = () => setIsBookingOpen(true);
    const closeBooking = () => setIsBookingOpen(false);

    return (
        <BookingContext.Provider value={{ isBookingOpen, openBooking, closeBooking }}>
            {children}
        </BookingContext.Provider>
    );
};
