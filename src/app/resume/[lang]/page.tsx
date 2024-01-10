import { DEFAULT_LANGUAGE, DEFAULT_RESUME_PATH } from '@/constants';
import { Resume } from "@/interfaces/resume";
import { readFileSync, readdirSync } from "fs";
import { merge } from "lodash";
import { NextPage } from "next";

export interface ResumePageProps {
  params: {
    lang: string;
  };
  searchParams: {
    [key: string]: string | string[];
  };
}

const ResumePage: NextPage<ResumePageProps> = async ({ params }) => {
  const { language, data: resume } = getResumeData(params.lang);

  return (
    <div>
      <p>{language.name} {language.flag}</p>
      <hr></hr>
      <h1>
        {resume.firstName} {resume.lastName}
      </h1>
      <h3>{resume.role}</h3>
      <p>{resume.about}</p>
      <hr></hr>
      <code>{JSON.stringify(resume)}</code>
    </div>
  );
};

const getResumeData = (language: string): Resume => {
  const defaultResume = JSON.parse(
    readFileSync(getResumePath(DEFAULT_LANGUAGE), "utf-8")
  );
  const translatedResume =
    language !== DEFAULT_LANGUAGE
      ? JSON.parse(readFileSync(getResumePath(language), "utf-8"))
      : {};
  return merge(defaultResume, translatedResume);
};

const getResumePath = (language: string): string => {
  return `${DEFAULT_RESUME_PATH}/${language}.json`;
};

export const generateStaticParams = () => {
  const pages = readdirSync(DEFAULT_RESUME_PATH).map((filename) =>
    filename.replace(".json", "")
  );
  return pages.map((page) => ({ lang: page }));
};

export default ResumePage;
