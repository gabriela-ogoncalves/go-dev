ALTER TABLE exercise
    RENAME COLUMN answer TO correct_answer;

ALTER TABLE exercise
    DROP COLUMN source;

ALTER TABLE exercise
    ADD COLUMN answers varchar(80)[];
