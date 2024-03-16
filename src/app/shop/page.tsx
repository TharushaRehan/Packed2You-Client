"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, SlidersHorizontal, Star } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";
import { PopularTags } from "@/constants/shop-features";
import PageLayout from "@/components/page-layout/page-layout";

const Shop = () => {
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [priceDropdown, setPriceDropdown] = useState(false);
  const [ratingsDropdown, setRatingsDropdown] = useState(false);
  const [tagDropdown, setTagDropdown] = useState(false);
  const [price, setPrice] = useState<number[]>([0]);
  const stars = Array(5).fill(0);
  const [tags, setTags] = useState<String[]>([]);
  //

  const items = [
    {
      id: "freshFruits",
      label: "Fresh Fruits",
    },
    {
      id: "vegetables",
      label: "Vegetables",
    },
    {
      id: "cooking",
      label: "Cooking",
    },
    {
      id: "snaks",
      label: "Snaks",
    },
    {
      id: "beverages",
      label: "Beverages",
    },
    {
      id: "breadBakery",
      label: "Bread & Bakery",
    },
    {
      id: "beautyHealth",
      label: "Beauty & Health",
    },
  ] as const;

  const ratings = [
    {
      id: "5",
      label: "5.0",
    },
    {
      id: "4",
      label: "4.0 & Up",
    },
    {
      id: "3",
      label: "3.0 & Up",
    },
    {
      id: "2",
      label: "2.0 & Up",
    },
    {
      id: "1",
      label: "1.0 & Up",
    },
  ] as const;
  //

  //
  const FormSchema = z.object({
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["freshFruits"],
    },
  });

  const handleOnChange = (value: number[]) => {
    setPrice(value);
  };
  const addTag = (tag: string) => {
    // Check if tag already exists
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    } else {
      setTags(tags.filter((t) => t !== tag));
    }
  };
  //
  return (
    <PageLayout>
      <div className="flex gap-5 px-10 pb-10 justify-between">
        <div className="space-y-6 min-w-[250px] max-w-[250px]">
          <Button className="w-fit rounded-full text-lg gap-2" size={"lg"}>
            Filters <SlidersHorizontal size={20} />
          </Button>
          <div className="border-b">
            <div className="flex justify-between mt-5 mb-5 items-center">
              <p className="font-bold text-lg">All Categories</p>
              <p>
                {categoryDropdown ? (
                  <ChevronDown
                    onClick={() => setCategoryDropdown(!categoryDropdown)}
                  />
                ) : (
                  <ChevronUp
                    onClick={() => setCategoryDropdown(!categoryDropdown)}
                  />
                )}
              </p>
            </div>
            {categoryDropdown && (
              <Form {...form}>
                <form className="space-y-8 mb-5">
                  <FormField
                    control={form.control}
                    name="items"
                    render={() => (
                      <FormItem>
                        {items.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name="items"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item.id}
                                  className="flex flex-row items-center space-x-3 space-y-0 pb-2"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(item.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                              ...field.value,
                                              item.id,
                                            ])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== item.id
                                              )
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal text-base text-gray-500">
                                    {item.label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            )}
          </div>
          <div className="border-b mb-3">
            <div className="flex justify-between mt-5 mb-5 items-center">
              <p className="font-bold text-lg">
                Price - <span className="font-normal text-base">$ {price}</span>
              </p>
              <p>
                {priceDropdown ? (
                  <ChevronDown
                    onClick={() => setPriceDropdown(!priceDropdown)}
                  />
                ) : (
                  <ChevronUp onClick={() => setPriceDropdown(!priceDropdown)} />
                )}
              </p>
            </div>
            {priceDropdown && (
              <Slider
                max={500}
                step={1}
                value={price}
                onValueChange={handleOnChange}
                className="mb-5"
              />
            )}
          </div>
          <div className="border-b">
            <div className="flex justify-between mt-5 mb-5 items-center">
              <p className="font-bold text-lg">Rating</p>
              <p>
                {ratingsDropdown ? (
                  <ChevronDown
                    onClick={() => setRatingsDropdown(!ratingsDropdown)}
                  />
                ) : (
                  <ChevronUp
                    onClick={() => setRatingsDropdown(!ratingsDropdown)}
                  />
                )}
              </p>
            </div>
            {ratingsDropdown && (
              <Form {...form}>
                <form className="space-y-8 mb-5">
                  <FormField
                    control={form.control}
                    name="items"
                    render={() => (
                      <FormItem>
                        {ratings.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name="items"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item.id}
                                  className="flex flex-row items-center space-x-3 space-y-0 pb-2"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(item.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                              ...field.value,
                                              item.id,
                                            ])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== item.id
                                              )
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal text-base text-gray-500 flex items-center gap-3">
                                    <div className="flex gap-2">
                                      {stars.map((_, index) => (
                                        <Star
                                          key={index}
                                          size={15}
                                          color={
                                            item.id >= (index + 1).toString()
                                              ? "#FF8A00"
                                              : "#CCCCCC"
                                          }
                                          fill={
                                            item.id >= (index + 1).toString()
                                              ? "#FF8A00"
                                              : "#CCCCCC"
                                          }
                                          className=""
                                        />
                                      ))}
                                    </div>
                                    {item.label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            )}
          </div>
          <div className="border-b">
            <div className="flex justify-between mt-5 mb-5 items-center">
              <p className="font-bold text-lg">Popular Tag</p>
              <p>
                {tagDropdown ? (
                  <ChevronDown onClick={() => setTagDropdown(!tagDropdown)} />
                ) : (
                  <ChevronUp onClick={() => setTagDropdown(!tagDropdown)} />
                )}
              </p>
            </div>
            {tagDropdown && (
              <div className="flex flex-wrap gap-3 mb-5">
                {PopularTags.map((tag, index) => (
                  <p
                    key={index}
                    className={`py-1 px-3 border rounded-full w-fit cursor-pointer text-base font-thin ${
                      tags.includes(tag)
                        ? "bg-primary text-white border-primary"
                        : " bg-[#F2F2F2] border-[#F2F2F2]"
                    }`}
                    onClick={() => addTag(tag)}
                  >
                    {tag}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
        <div></div>
      </div>
    </PageLayout>
  );
};

export default Shop;
