import { FormValues } from "./Context"

export interface CardData extends FormValues {
  id: string;
}

const cardData: CardData[] = [
  {
    id: '1',
    job_title: 'UX UI Designer',
    company_name: 'Test Company',
    industry: 'IT',
    location: 'Chennai',
    remote_type: 'Remote',
    experience: {
      min: '1 years',
      max: '7 years',
    },
    salary: {
      min: '10000',
      max: '100000',
    },
    total_exployees: '100',
    apply_type: "quick_apply",
  },
  {
    id: '2',
    job_title: 'UI Developer',
    company_name: 'Test Company',
    industry: 'IT',
    location: 'Chennai',
    remote_type: 'Remote',
    experience: {
      min: '1 years',
      max: '7 years',
    },
    salary: {
      min: '10000',
      max: '100000',
    },
    total_exployees: '100',
    apply_type: "external_apply",
  },
  {
    id: '3',
    job_title: 'React Developer',
    company_name: 'Test Company',
    industry: 'IT',
    location: 'Chennai',
    remote_type: 'Remote',
    experience: {
      min: '1 years',
      max: '7 years',
    },
    salary: {
      min: '10000',
      max: '100000',
    },
    total_exployees: '100',
    apply_type: "quick_apply" ,
  },
  {
    id: '4',
    job_title: 'Node developer',
    company_name: 'Test Company',
    industry: 'IT',
    location: 'Chennai',
    remote_type: 'Remote',
    experience: {
      min: '1 years',
      max: '7 years',
    },
    salary: {
      min: '10000',
      max: '100000',
    },
    total_exployees: '100',
    apply_type: "quick_apply" ,
  },
]

export default cardData