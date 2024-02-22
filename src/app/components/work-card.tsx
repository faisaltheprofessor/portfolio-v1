"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
interface Props {
  className?: string;
  image: string;
  description: string;
  title: string;
  featureText?: string;
  github?: string;
  url?: string;
  tools?: [];
  alt?: string;
  reverse?: boolean;
}
const WorkCard = ({
  className,
  image,
  description,
  title,
  featureText,
  github,
  url,
  tools,
  reverse = false,
  alt = "Work",
}: Props) => {
  return (
    <motion.div
      className={cn(
        "relative w-[60%] flex-1  mt-4 rounded-md shodow transition cursor-pointer",
        className
      )}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      <Image
        src={image}
        alt={alt}
        height={500}
        width={500}
        className={cn("absolute shadow-2xl", {
          "right-0": reverse,
          "left-0": !reverse,
        })}
      />
      <div
        className={cn("absolute  flex flex-col top-12 bg-navy/90 p-2", {
          "right-0": !reverse,
          "left-0": reverse,
        })}
      >
        <h2 className="text-green text-sm text-right">{featureText}</h2>
        <h1 className="text-lightest-slate text-lg font-bold">{title}</h1>
      </div>
      <motion.div
        className={cn(
          "description absolute w-full md:w-2/3  bg-light-navy/70 md:bg-light-navy/90 rounded-md  shadow top-48 text-white  p-4 text-xs",
          {
            "right-0": !reverse,
            "left-0": reverse,
          }
        )}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        {description}
      </motion.div>

      <div
        className={cn(
          "absolute top-5 flex text-lightest-slate gap-x-3 bg-navy/70 p-1",
          {
            "right-0": !reverse,
            "left-0": reverse,
          }
        )}
      >
        {github && (
          <a
            href={github}
            target="_blank"
            className="hover:-translate-y-1 transition hover:text-green"
          >
            <Github size="15" />
          </a>
        )}

        <a
          href={url}
          target="_blank"
          className="hover:-translate-y-1 transition hover:text-green"
        >
          <ExternalLink size="15" />
        </a>
      </div>
    </motion.div>
  );
};

export default WorkCard;
