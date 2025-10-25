"use client";
import { CategoryTable } from "@/components/admin/CategoryTable";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, Plus } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { CategorySchema, CategorySchemaType } from "@/schema/Schema";
import { useForm, SubmitHandler } from "react-hook-form";

const AddCategoryPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<CategorySchemaType>({
    resolver: zodResolver(CategorySchema),

    defaultValues: {
      category_name: "",
      category_photo: undefined,
      category_description: "",
    },
    mode: "onChange",
  });
  const onSubmit = async (data: CategorySchemaType) => {
    console.log(data);
  };
  return (
    <div className="p-4">
      <div className="flex w-full items-center justify-between">
        <Link href="/dashboard/categories">
          {" "}
          <span
            className={`${buttonVariants({ variant: "outline" })} flex cursor-pointer items-center gap-2 border-none`}
          >
            <ChevronLeft />
            Back
          </span>
        </Link>
      </div>
      <div className="py-8">
        <Card className="w-full max-w-3xl">
          <CardHeader>
            <CardTitle>
              <h2>Add New Category</h2>
            </CardTitle>
            <CardDescription>Enter category information below.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="category_name">Category Name</Label>
                  <Input
                    {...register("category_name")}
                    type="text"
                    id="category_name"
                    name="category_name"
                    required
                  />
                  {errors.category_name && (
                    <p className="text-red-500">
                      {errors.category_name?.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="category_photo">Category Photo</Label>
                  <Input
                    type="file"
                    id="category_photo"
                    name="category_photo"
                    required
                    accept="image/*"
                    onChange={(event) => {
                      const file = event.target.files?.[0];
                      setValue("category_photo", file as any, {
                        shouldValidate: true,
                      });
                    }}
                  />
                  {errors.category_photo && (
                    <p className="text-red-500">
                      {errors.category_photo?.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="desc">Categrory Description</Label>
                  <Textarea
                    {...register("category_description")}
                    placeholder="Type your message here."
                    id="des"
                  />
                  {errors.category_description && (
                    <p className="text-red-500">
                      {errors.category_description?.message}
                    </p>
                  )}
                </div>
                <Button className="cursor-pointer">Submit</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddCategoryPage;
