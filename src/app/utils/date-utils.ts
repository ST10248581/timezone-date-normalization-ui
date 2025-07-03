export class DateUtils {
    static getCurrentTimeZone(): string {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }

    static toLocalTime(utcStr: string): string {
        const date = new Date(utcStr);
        return date.toLocaleString();
    }

    static toUtc(dateStr: string, timeZone: string): string {
        const localDate = new Date(dateStr);
        const utcDate = new Date(localDate.toLocaleString('en-US', { timeZone: 'UTC' }));
        return utcDate.toISOString();
    }
}
