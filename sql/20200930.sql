CREATE TABLE public.feedback
(
    id serial NOT NULL,
    type character varying(16) COLLATE pg_catalog."default" NOT NULL,
    status character varying(16) COLLATE pg_catalog."default" DEFAULT 'pending'::character varying,
    content text COLLATE pg_catalog."default" NOT NULL,
    note text COLLATE pg_catalog."default",
    created_time timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    created_by character varying(16) COLLATE pg_catalog."default" NOT NULL,
    user_email character varying(32) COLLATE pg_catalog."default" NOT NULL,
    updated_time timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT feedback_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
