"use client";
import { Skeleton } from "@mui/material";

interface Props {
    amount: number;
}

export const CardSkeleton = ({ amount }: Props) => {
    return Array.from({ length: amount }).map((_, index) => (
        <div key={index} className="w-full max-w-[400px]">
            <Skeleton
                variant="rectangular"
                height={200}
                className="rounded-md mb-4"
            />
            <Skeleton variant="text" height={30} width="80%" />
            <Skeleton variant="text" height={20} width="60%" />
        </div>
    ));
};
