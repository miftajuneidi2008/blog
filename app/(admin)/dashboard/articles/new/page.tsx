"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArticleSchema, ArticleSchemaType } from "@/schema/Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const AddArticle = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ArticleSchemaType>({
    resolver: zodResolver(ArticleSchema),
    defaultValues: {
      article_title: "",
      article_category: "Programming",
      article_photo: undefined,
      article_description: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: ArticleSchemaType) => {
    console.log(data);
  };
  return (
    <div className="p-4">
      <div className="flex w-full items-center justify-between">
        <Link href="/dashboard/articles">
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
                  <Label htmlFor="article_title">Article Title</Label>
                  <Input
                    {...register("article_title")}
                    type="text"
                    id="article_title"
                    placeholder="Article title"
                    required
                  />
                  {errors.article_title && (
                    <p className="text-red-500">
                      {errors.article_title?.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="article_category">Article Category</Label>
                  <Controller
                    name="article_category"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Article Category</SelectLabel>
                            <SelectItem value="d">Select Title</SelectItem>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.article_category && (
                    <p className="text-red-500">
                      {errors.article_category?.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="category_photo">Category Photo</Label>
                  <Input
                    type="file"
                    id="article_photo"
                    name="article_photo"
                    required
                    accept="image/*"
                    onChange={(event) => {
                      const file = event.target.files?.[0];
                      setValue("article_photo", file as any, {
                        shouldValidate: true,
                      });
                    }}
                  />
                  {errors.article_photo && (
                    <p className="text-red-500">
                      {errors.article_photo?.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="desc">Categrory Description</Label>
                  <Textarea
                    {...register("article_description")}
                    placeholder="Type your message here."
                    id="des"
                  />
                  {errors.article_description && (
                    <p className="text-red-500">
                      {errors.article_description?.message}
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

export default AddArticle;
