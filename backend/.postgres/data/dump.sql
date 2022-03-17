--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4 (Debian 13.4-1.pgdg100+1)
-- Dumped by pg_dump version 13.4 (Debian 13.4-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Profile; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Profile" (
                                  id text NOT NULL,
                                  name text DEFAULT ''::text NOT NULL,
                                  status text DEFAULT 'active'::text NOT NULL,
                                  owner text,
                                  notes text DEFAULT ''::text NOT NULL
);


ALTER TABLE public."Profile" OWNER TO postgres;

--
-- Name: Project; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Project" (
                                  id text NOT NULL,
                                  profile text,
                                  status text DEFAULT 'active'::text NOT NULL,
                                  title text DEFAULT ''::text NOT NULL,
                                  notes text DEFAULT ''::text NOT NULL
);


ALTER TABLE public."Project" OWNER TO postgres;

--
-- Name: Template; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Template" (
                                   id text NOT NULL,
                                   title text DEFAULT ''::text NOT NULL,
                                   preview jsonb
);


ALTER TABLE public."Template" OWNER TO postgres;

--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
                               id text NOT NULL,
                               name text DEFAULT ''::text NOT NULL,
                               email text DEFAULT ''::text NOT NULL,
                               password text NOT NULL,
                               "s3Secret" text DEFAULT ''::text NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: UserRole; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."UserRole" (
                                   id text NOT NULL,
                                   name text DEFAULT ''::text NOT NULL
);


ALTER TABLE public."UserRole" OWNER TO postgres;

--
-- Name: Variant; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Variant" (
                                  id text NOT NULL,
                                  project text,
                                  status text DEFAULT 'active'::text NOT NULL,
                                  title text DEFAULT ''::text NOT NULL,
                                  template text
);


ALTER TABLE public."Variant" OWNER TO postgres;

--
-- Name: _User_roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."_User_roles" (
                                      "A" text NOT NULL,
                                      "B" text NOT NULL
);


ALTER TABLE public."_User_roles" OWNER TO postgres;

--
-- Data for Name: Profile; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Profile" (id, name, status, owner, notes) VALUES
    ('ckzy7wchs02495u81jkaom93e', 'Profile 1', 'active', 'ckzy68dub0030ud81pv2kg6xz', ''),
    ('ckzy8qczr09285981aty5pj27', 'LaunchDrive', 'active', 'ckzy6qx3y02029s816ngkw5dg', '');


--
-- Data for Name: Project; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Project" (id, profile, status, title, notes) VALUES
    ('ckzy8qwq0105959819bev6w9n', 'ckzy8qczr09285981aty5pj27', 'active', 'Aquazing', ''),
    ('ckzy8r5io11835981cq5qppgb', 'ckzy7wchs02495u81jkaom93e', 'active', 'Foo', '');


--
-- Data for Name: Template; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Template" (id, title, preview) VALUES
    ('ckzy9g8gc0287pb814vbvnqf5', 'Duckly', '{"etag": "\"df2d5ad4430e5b9a87dd89539c8a238f\"", "bucket": "templates", "folder": "ckzy68dub0030ud81pv2kg6xz", "filename": "Iltis-square.png"}');


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."User" (id, name, email, password, "s3Secret") VALUES
    ('ckzy68dub0030ud81pv2kg6xz', 'Admin', 'admin@launchdrive.io', '$2a$10$W7gfRnOlNltqCcfRg3WAduPpc/Qlqew.eeLfOeG738pojHx1pxgM2', 'cbc1822e73de85389cf92ea2450ae7ec8e8d42dbff28dc4c876c9cd657e7ddbdc742c7f753e06cff397b72f55c0aab4619e1ac16ba7ce0f7318ae5067c324ef8');
--    ('ckzy6qx3y02029s816ngkw5dg', 'John Doe', 'john@launchdrive.io', '$2a$10$ZHQegBdLW0fL0Wp/9UPsQuotWXZ3ia6jy3DhN8Fl8bY05I6LZgiQy', '3d3e1788df14d83146a1866e4eca97a5e699c245f714e6f0fe3aa07b769186285413558f4aefb74ca41afbc7304294ee1e1743bf1367f822d861277f3e741a36');


--
-- Data for Name: UserRole; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."UserRole" (id, name) VALUES
    ('ckzy68rji0175ud819slm57we', 'Admin'),
    ('ckzy68y2z0226ud810xlyuctd', 'Authenticated');


--
-- Data for Name: Variant; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Variant" (id, project, status, title, template) VALUES
    ('ckzy8w0v60240nd81ds1747me', 'ckzy8qwq0105959819bev6w9n', 'active', 'Aquazing A', 'ckzy9g8gc0287pb814vbvnqf5'),
    ('ckzy9uli23264pb816ed9kbpy', 'ckzy8qwq0105959819bev6w9n', 'active', 'Aquazing B', 'ckzy9g8gc0287pb814vbvnqf5');


--
-- Data for Name: _User_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."_User_roles" ("A", "B") VALUES
    ('ckzy68dub0030ud81pv2kg6xz', 'ckzy68rji0175ud819slm57we'),
    ('ckzy6qx3y02029s816ngkw5dg', 'ckzy68y2z0226ud810xlyuctd');


--
-- Name: Profile Profile_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Profile"
    ADD CONSTRAINT "Profile_pkey" PRIMARY KEY (id);


--
-- Name: Project Project_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Project"
    ADD CONSTRAINT "Project_pkey" PRIMARY KEY (id);


--
-- Name: Template Template_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Template"
    ADD CONSTRAINT "Template_pkey" PRIMARY KEY (id);


--
-- Name: UserRole UserRole_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserRole"
    ADD CONSTRAINT "UserRole_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: Variant Variant_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Variant"
    ADD CONSTRAINT "Variant_pkey" PRIMARY KEY (id);


--
-- Name: Profile_owner_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "Profile_owner_idx" ON public."Profile" USING btree (owner);


--
-- Name: Project_profile_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "Project_profile_idx" ON public."Project" USING btree (profile);


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: User_s3Secret_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "User_s3Secret_idx" ON public."User" USING btree ("s3Secret");


--
-- Name: Variant_project_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "Variant_project_idx" ON public."Variant" USING btree (project);


--
-- Name: Variant_template_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "Variant_template_idx" ON public."Variant" USING btree (template);


--
-- Name: _User_roles_AB_unique; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "_User_roles_AB_unique" ON public."_User_roles" USING btree ("A", "B");


--
-- Name: _User_roles_B_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "_User_roles_B_index" ON public."_User_roles" USING btree ("B");


--
-- Name: Profile Profile_owner_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Profile"
    ADD CONSTRAINT "Profile_owner_fkey" FOREIGN KEY (owner) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Project Project_profile_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Project"
    ADD CONSTRAINT "Project_profile_fkey" FOREIGN KEY (profile) REFERENCES public."Profile"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Variant Variant_project_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Variant"
    ADD CONSTRAINT "Variant_project_fkey" FOREIGN KEY (project) REFERENCES public."Project"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Variant Variant_template_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Variant"
    ADD CONSTRAINT "Variant_template_fkey" FOREIGN KEY (template) REFERENCES public."Template"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: _User_roles _User_roles_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_User_roles"
    ADD CONSTRAINT "_User_roles_A_fkey" FOREIGN KEY ("A") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _User_roles _User_roles_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_User_roles"
    ADD CONSTRAINT "_User_roles_B_fkey" FOREIGN KEY ("B") REFERENCES public."UserRole"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

