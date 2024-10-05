import { LucideIcon } from "lucide-react";

export type Item = ExperienceItem | EducationItem;

export interface BaseItem {
    icon: LucideIcon;
}

export interface ExperienceItem extends BaseItem {
    title: string;
    workplace: string;
    dates: string;
    responsibilities: string[];
}

export interface EducationItem extends BaseItem {
    degree: string;
    gpa?: string;
    school: string;
    years: string;
}

export type Props = {
    params: { locale: string };
};