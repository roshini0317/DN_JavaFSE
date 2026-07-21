SELECT DATE_FORMAT(registration_date, '%Y-%m') AS registration_month,
COUNT(*) AS total_registrations FROM Registrations
WHERE registration_date >= CURDATE() - INTERVAL 12 MONTH
GROUP BY DATE_FORMAT(registration_date, '%Y-%m') ORDER BY registration_month;