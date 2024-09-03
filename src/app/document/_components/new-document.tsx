"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export const NewDocument = () => {
  const router = useRouter();
  const { toast } = useToast();

  const createNewDoc = async (
    title: string = "Untitled Document",
    description: string = ""
  ) => {
    try {
      const response = await axios.post("/api/document/new", {
        title: title,
        description: description,
      });

      toast({
        title: "Document Successfully Created!",
      });
      router.push(`/document/${response.data.id}`);
    } catch (error) {}
  };

  const TemplateMap = [
    {
      component: (
        <button onClick={() => createNewDoc()}>
          <Card className="w-[180px] lg:w-[200px] hover:border hover:border-blue-500 hover:cursor-pointer">
            <CardHeader></CardHeader>
            <CardContent className="flex justify-center mx-auto">
              <Plus size={80} />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </button>
      ),
      footer: "Blank Document",
    },
    {
      component: (
        <button
          onClick={() =>
            createNewDoc(
              "Wizardly Template",
              `
              [Exposition] 


              [Rising Action] 


              [Climax] 


              [Falling Action] 

              
              [Denouement]`
            )
          }
        >
          <Card className="w-[180px] lg:w-[200px] hover:border hover:border-blue-500 hover:cursor-pointer">
            <CardHeader></CardHeader>
            <CardContent className="flex justify-center mx-auto">
              <Plus size={80} />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </button>
      ),
      footer: "Wizardly Template",
    },
    {
      component: (
        <button
          onClick={() =>
            createNewDoc(
              "Resume Template",
              `
              [Name] 


              [Job History] 


              [Projects] 


              [Education] 

              
              [Skills]`
            )
          }
        >
          <Card className="w-[180px] lg:w-[200px] hover:border hover:border-blue-500 hover:cursor-pointer">
            <CardHeader></CardHeader>
            <CardContent className="flex justify-center mx-auto">
              <Plus size={80} />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </button>
      ),
      footer: "Resume Template",
    },
  ];

  return (
    <div className="bg-gray-50 flex flex-col items-center px-4 pt-4">
      <div className="flex flex-col w-full max-w-5xl mx-auto">
        <h3 className="text-muted-foreground text-sm text-center mb-4">Start a new document</h3>
        <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
          {TemplateMap.map((template) => (
            <div key={template.footer} className="flex flex-col items-center">
              {template.component}
              <p className="text-sm mt-2 text-center">{template.footer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};