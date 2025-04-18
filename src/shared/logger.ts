/* eslint-disable no-console */
// src/lib/logger.ts
type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LoggerOptions {
  prefix?: string;
  minLevel?: LogLevel;
  enabledInProd?: boolean;
  customColors?: Record<LogLevel, string>;
}

class Logger {
  private prefix: string;
  private minLevel: LogLevel;
  private enabledInProd: boolean;
  private colors: Record<LogLevel, string>;
  private levelValues: Record<LogLevel, number> = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  };

  constructor(options: LoggerOptions = {}) {
    this.prefix = options.prefix || '';
    this.minLevel = options.minLevel || 'debug';

    if (options.enabledInProd === undefined && this.isServer()) {
      this.enabledInProd = true; // Always enabled in server environment
    } else {
      this.enabledInProd = options.enabledInProd || false;
    }

    // Default colors
    this.colors = options.customColors || {
      debug: '#808080', // Gray
      info: '#0070f3', // Blue
      warn: '#f5a623', // Orange
      error: '#ff0000', // Red
    };
  }

  /**
   * Determine if we're in a browser environment
   */
  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  /**
   * Determine if we're in a server environment
   */
  private isServer(): boolean {
    return !this.isBrowser();
  }

  /**
   * Determine if we're in production mode
   */
  private isProduction(): boolean {
    console.log('NODE_ENV:', process.env.NODE_ENV); // Debugging line

    return process.env.NODE_ENV === 'production';
  }

  /**
   * Check if logging should be performed based on environment and settings
   */
  private shouldLog(level: LogLevel): boolean {
    // Don't log in production unless explicitly enabled
    if (this.isProduction() && !this.enabledInProd) {
      return false;
    }

    // Check if level is high enough based on minLevel setting
    return this.levelValues[level] >= this.levelValues[this.minLevel];
  }

  /**
   * Format log message with timestamp and prefix
   */
  private formatMessage(message: string): string {
    const timestamp = new Date().toISOString();
    const formattedPrefix = this.prefix ? `[${this.prefix}]` : '';
    return `${timestamp} ${formattedPrefix} ${message}`;
  }

  /**
   * Log a debug message
   */
  debug(message: string, ...args: any[]): void {
    if (!this.shouldLog('debug')) return;

    const formattedMessage = this.formatMessage(message);

    if (this.isBrowser()) {
      console.debug(`%c${formattedMessage}`, `color: ${this.colors.debug}`, ...args);
    } else {
      console.debug(formattedMessage, ...args);
    }
  }

  /**
   * Log an info message
   */
  info(message: string, ...args: any[]): void {
    if (!this.shouldLog('info')) return;

    const formattedMessage = this.formatMessage(message);

    if (this.isBrowser()) {
      console.info(`%c${formattedMessage}`, `color: ${this.colors.info}`, ...args);
    } else {
      console.info(formattedMessage, ...args);
    }
  }

  /**
   * Log a warning message
   */
  warn(message: string, ...args: any[]): void {
    if (!this.shouldLog('warn')) return;

    const formattedMessage = this.formatMessage(message);

    if (this.isBrowser()) {
      console.warn(`%c${formattedMessage}`, `color: ${this.colors.warn}`, ...args);
    } else {
      console.warn(formattedMessage, ...args);
    }
  }

  /**
   * Log an error message
   */
  error(message: string | Error, ...args: any[]): void {
    if (!this.shouldLog('error')) return;

    // Convert Error object to string if passed
    const errorMessage =
      message instanceof Error ? `${message.name}: ${message.message}\n${message.stack}` : message;

    const formattedMessage = this.formatMessage(errorMessage);

    if (this.isBrowser()) {
      console.error(`%c${formattedMessage}`, `color: ${this.colors.error}`, ...args);
    } else {
      console.error(formattedMessage, ...args);
    }
  }

  /**
   * Create a new logger instance with the same options but a different prefix
   */
  createSubLogger(prefix: string): Logger {
    return new Logger({
      prefix: this.prefix ? `${this.prefix}:${prefix}` : prefix,
      minLevel: this.minLevel,
      enabledInProd: this.enabledInProd,
      customColors: this.colors,
    });
  }
}

// Create default instance
const defaultLogger = new Logger();

// Export both the class and default instance
export { Logger, type LoggerOptions };
export default defaultLogger;
