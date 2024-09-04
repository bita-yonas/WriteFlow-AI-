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
        <button
          onClick={() =>
            createNewDoc(
              "New Document",
              `start writing content here...
              `
            )
          }
        >
          <Card className="w-[180px] lg:w-[200px] rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 text-white shadow-xl hover:shadow-2xl hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 border border-gray-600 hover:border-gray-400 transition-all duration-300">
            <CardHeader></CardHeader>
            <CardContent className="flex justify-center mx-auto">
              <Plus size={80} className="text-white" />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </button>
      ),
      footer: "New Document",
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
          <Card className="w-[180px] lg:w-[200px] rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 text-white shadow-xl hover:shadow-2xl hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 border border-gray-600 hover:border-gray-400 transition-all duration-300">
            <CardHeader></CardHeader>
            <CardContent className="flex justify-center mx-auto">
              <Plus size={80} className="text-white" />
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
          <Card className="w-[180px] lg:w-[200px] rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 text-white shadow-xl hover:shadow-2xl hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 border border-gray-600 hover:border-gray-400 transition-all duration-300">
            <CardHeader></CardHeader>
            <CardContent className="flex justify-center mx-auto">
              <Plus size={80} className="text-white" />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </button>
      ),
      footer: "Resume Template",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-900 to-black flex flex-col items-center px-4 pt-4">
      <div className="flex flex-col w-full max-w-5xl mx-auto">
        <h3 className="text-white text-sm text-center mb-4">Start a new document</h3>
        <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
          {TemplateMap.map((template) => (
            <div key={template.footer} className="flex flex-col items-center">
              {template.component}
              <p className="text-sm mt-2 text-center text-white">{template.footer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
