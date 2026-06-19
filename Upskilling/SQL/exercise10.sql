SELECT e.event_id, e.title FROM Events e WHERE e.event_id IN (
SELECT DISTINCT event_id FROM Registrations)
AND e.event_id NOT IN (
    SELECT DISTINCT event_id FROM Feedback );