'use client';

export const formatDate = (dateTimeString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(dateTimeString).toLocaleDateString(undefined, options);
};

export const formatTime12Hour = (dateTimeString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  return new Date(dateTimeString).toLocaleTimeString(undefined, options);
};
