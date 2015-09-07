initSidebarItems({"enum":[["Month",""],["Weekday",""]],"fn":[["get_current_time","Equivalent to the UNIX gettimeofday() function, but portable."],["get_days_in_month","Returns the number of days in a month, taking leap years into account."],["get_monday_weeks_in_year","Returns the number of weeks in the year, where weeks are taken to start on Monday. Will be 52 or 53. The date must be valid. (Years always have 52 7-day periods, plus 1 or 2 extra days depending on whether it's a leap year. This function is basically telling you how many Mondays are in the year, i.e. there are 53 Mondays if one of the extra days happens to be a Monday.)"],["get_monotonic_time","Queries the system monotonic time."],["get_real_time","Queries the system wall-clock time."],["get_sunday_weeks_in_year","Returns the number of weeks in the year, where weeks are taken to start on Sunday. Will be 52 or 53. The date must be valid. (Years always have 52 7-day periods, plus 1 or 2 extra days depending on whether it's a leap year. This function is basically telling you how many Sundays are in the year, i.e. there are 53 Sundays if one of the extra days happens to be a Sunday.)"],["is_leap_year","Returns TRUE if the year is a leap year."],["is_valid_day","Returns true if the day of the month is valid (a day is valid if it's between 1 and 31 inclusive)."],["is_valid_dmy","Returns true if the day-month-year triplet forms a valid, existing day in the range of days GDate understands (Year 1 or later, no more than a few thousand years in the future)."],["is_valid_julian","Returns true if the Julian day is valid. Anything greater than zero is basically a valid Julian, though there is a 32-bit limit."],["is_valid_month","Returns true if the month value is valid. The 12 GDateMonth enumeration values are the only valid months."],["is_valid_weekday","Returns true if the weekday is valid. The seven GDateWeekday enumeration values are the only valid weekdays."],["is_valid_year","Returns true if the year is valid. Any year greater than 0 is valid, though there is a 16-bit limit to what GDate will understand."],["usleep","Pauses the current thread for the given number of microseconds."]],"struct":[["Date",""],["TimeVal","Represents a precise time, with seconds and microseconds. Similar to the struct timeval returned by the gettimeofday() UNIX system call."]],"type":[["Day",""],["Time",""],["Year",""]]});