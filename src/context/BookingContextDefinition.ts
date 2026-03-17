import { createContext } from 'react';

interface BookingContextType {
    isBookingOpen: boolean;
    openBooking: () => void;
    closeBooking: () => void;
}

export const BookingContext = createContext<BookingContextType | undefined>(undefined);
