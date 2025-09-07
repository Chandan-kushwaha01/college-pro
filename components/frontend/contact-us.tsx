"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import TextArea from "../FormInputs/TextareaInput";
import PhoneInput from "../FormInputs/PhoneInput";

export type RegisterInputProps = {
  fullName: string;
  email: string;
  password: string;
  phone: string;
};

export function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>();
  const router = useRouter();

  async function onSubmit(data: RegisterInputProps) {
    console.log(data);
  }

  return (
    <div className="bg-gray-200 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Form */}
        <div className="flex items-center justify-center mb-12">
          <Card className="w-full max-w-3xl border-0 shadow-sm rounded-2xl">
            <CardContent className="px-6 sm:px-8 py-4">
              <h3 className="text-lg sm:text-xl font-semibold md:text-3xl text-center">
                Tell us about your institution and requirements.
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm mb-4 text-center">
                Our team will reach out within 24 hours to schedule a personilized demo and discuss your specific needs.
              </p>
              <form
                className="grid gap-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <TextInput
                  label="Name"
                  register={register}
                  name="name"
                  errors={errors}
                  placeholder="Eg. John Doe"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextInput
                    label="Email"
                    register={register}
                    name="email"
                    type="email"
                    errors={errors}
                    placeholder="Eg. johndoe@gmail.com"
                  />
                  {/* <PhoneInput
                    label="Phone with country code"
                    register={register}
                    name="phone"
                    errors={errors}
                    placeholder="Eg. 9800000000"
                  /> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextInput
                    label="College Name"
                    register={register}
                    name="college"
                    errors={errors}
                    placeholder="The British College"
                  />
                  <TextInput
                    label="Country"
                    register={register}
                    name="country"
                    errors={errors}
                    placeholder="Eg. Nepal"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextInput
                    label="School Website / Social Media Page"
                    register={register}
                    name="collegePage"
                    errors={errors}
                    placeholder="Eg. https://www.collegename.com"
                  />
                  <TextInput
                    label="Number of Students"
                    register={register}
                    name="students"
                    errors={errors}
                    placeholder="Eg. 300"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextInput
                    label="Your Role"
                    register={register}
                    name="role"
                    errors={errors}
                    placeholder="Eg. Teacher / Manager / Admin"
                  />
                  <TextInput
                    label="Product Interest"
                    register={register}
                    name="interest"
                    errors={errors}
                    placeholder="Eg. LMS, Student Portal, etc."
                  />
                </div>

                <TextArea
                  label="Product Interest (Details)"
                  register={register}
                  name="interestDetails"
                  errors={errors}
                />

                <TextInput
                  label="How did you hear about us?"
                  register={register}
                  name="referral"
                  errors={errors}
                  placeholder="Eg. Google, Social Media, etc."
                />

                <SubmitButton
                  buttonIcon={Send}
                  title="Sign Up"
                  loading={isLoading}
                  loadingTitle="Submitting, please wait..."
                />
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Info Cards */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Schedule Consultation Card */}
          <Card className="flex-1 bg-green-800 text-white border-0 rounded-2xl overflow-hidden">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">
                Schedule a Consultation with Our Experts
              </h2>
              <p className="text-green-100 mb-6 leading-relaxed text-sm sm:text-base">
                Discuss your agricultural needs and explore tailored solutions with our sales team.
              </p>
              <Button
                variant="secondary"
                className="bg-white text-green-800 hover:bg-gray-100 font-medium px-6 py-2 rounded-lg w-full sm:w-auto"
              >
                Book your Appointment
              </Button>
            </CardContent>
          </Card>

          {/* Contact Team Card */}
          <Card className="flex-1 bg-lime-400 text-green-900 border-0 rounded-2xl overflow-hidden">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-lg sm:text-xl font-semibold mb-6">
                Contact Our Team
              </h2>
              <div className="space-y-6">
                {/* Email Section */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-800 p-2 rounded-lg">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Email Us</span>
                  </div>
                  <div className="ml-11 space-y-1">
                    <p className="text-sm break-all">info@agrikkom.co.ug</p>
                    <p className="text-sm break-all">sales@agrikkom.co.ug</p>
                  </div>
                </div>

                {/* Phone Section */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-800 p-2 rounded-lg">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Call Us</span>
                  </div>
                  <div className="ml-11">
                    <p className="text-sm">+256 700 462 603</p>
                  </div>
                </div>

                {/* Location Section */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-800 p-2 rounded-lg">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Visit Us</span>
                  </div>
                  <div className="ml-11">
                    <p className="text-sm leading-relaxed">
                      Plot 3426, Kikulu Zone, Nyanja, Kampala, Uganda
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
