import { BiBriefcase } from "react-icons/bi";

const job = {
  name: "job",
  title: "Job",
  type: "document",
  icon: BiBriefcase,
  fields: [
    {
      name: "name",
      title: "Solvative",
      type: "string",
      description: "What is the name of the company?",
    },
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string",
      description: "Enter the job title. E.g: Software Developer",
    },
    {
      name: "logo",
      title: "Company Logo",
      type: "image",
    },
    {
      name: "url",
      title: "Company Website",
      type: "url",
    },
    {
      name: "description",
      title: "Full Stack Developer",
      type: "text",
      rows: 3,
      description: "Write a brief description about this role",
    },
    {
      name: "clientAssignment",
      title: "Client Assignment",
      type: "object",
      description: "If assigned to work on client-side projects, add client details here",
      fields: [
        {
          name: "clientName",
          title: "Client Company Name",
          type: "string",
          description: "Name of the client company you're working with",
        },
        {
          name: "clientLogo",
          title: "Client Company Logo",
          type: "image",
          description: "Logo of the client company",
        },
        {
          name: "clientRole",
          title: "Role at Client Company",
          type: "string",
          description: "Your role/title at the client company (e.g., Senior Developer, Full Stack Developer)",
        },
        {
          name: "clientProject",
          title: "Client Project Description",
          type: "text",
          rows: 2,
          description: "Brief description of the client project you're working on",
        },
        {
          name: "clientStartDate",
          title: "Client Assignment Start Date",
          type: "date",
          description: "When did you start working with this client?",
        },
        {
          name: "clientEndDate",
          title: "Client Assignment End Date",
          type: "date",
          description: "When did you end working with this client? (Leave empty if ongoing)",
        },
      ],
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
    },
  ],
};

export default job;
