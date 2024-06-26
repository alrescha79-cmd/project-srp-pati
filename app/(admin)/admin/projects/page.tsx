"use client";

// import { Button } from "@/components/ui/button";
// import { TrashIcon, ReloadIcon, MagnifyingGlassIcon, ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
// import Link from "next/link";
// import { ChangeEvent, useCallback, useEffect, useReducer, useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import debounce from "lodash.debounce";
// import { Input } from "@/components/ui/input";

export default function ProjectPage() {
  // const [loading, setLoading] = useState(false);

  // const [response, setResponse] = useReducer(
  //   (prev: any, next: any) => {
  //     return { ...prev, ...next };
  //   },
  //   {
  //     data: [],
  //     loading: true,
  //     searchTerm: '',
  //     page: 0
  //   }
  // );

  // const fetchProjects = async (value:string = '', page: number = 0) => {
  //   setResponse({loading: true});
  //   const res = await fetch(`/api/projects?term=${value}&page=${page}&limit=20`, {
  //     method: "GET",
  //   });
  //   const response = await res.json();

  //   setResponse({
  //     data: response.data,
  //     loading: false,
  //   });
  // };

  // const deleteProject = async (id: string) => {
  //   setLoading(true);
  //   const res = await fetch("/api/projects", {
  //     method: "DELETE",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify({ id }),
  //   });
  //   const response = await res.json();
  //   if (response?.status === 204) {
  //     // Reload the list data
  //     fetchProjects();
  //   }

  //   setLoading(false);
  // };

  // useEffect(() => {
  //   fetchProjects();
  // }, []);

  // const debounceAPI = useCallback(debounce((value:string)=> fetchProjects(value), 1000), [])

  return (
    <>
      {/* <div className="flex mb-5 justify-between">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute top-[10px] left-[10px] text-gray-400"/>
          <Input type="text" placeholder="Enter project title" className="pl-8" onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setResponse({ searchTerm: e.target.value })
            debounceAPI(e.target.value)
          }}/>
        </div>
        <div className="text-right">
          <Button disabled={response.page === 0 ? true : false} variant="outline" size="icon" onClick={() => {
            const page = response.page - 1;
            setResponse({ page })
            fetchProjects(response.term, page)
          }}>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => {
            const page = response.page + 1;
            setResponse({ page })
            fetchProjects(response.term, page)
          }}>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {response.loading ? (
        <div className="animate-pulse">
          <div className="h-2 bg-slate-200 rounded col-span-2"></div>
          <div className="h-2 bg-slate-200 rounded col-span-1 mt-3"></div>
        </div>
      ) : (
        <>
          {response.data.length > 0 ? (
            <>
              {response.data.map(
                (d: { title: string; id: string; description: string }) => (
                  <div key={d.id} className="mb-4 flex justify-between group">
                    <div>
                      <Link
                        className="text-xl font-semibold text-blue-600"
                        href={`/admin/projects/${d.id}`}
                      >
                        {d.title}
                      </Link>
                      <p className="text-sm text-gray-500 font-extralight">
                        {d?.description ? d?.description : "No description"}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-90">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant={"outline"}
                          >
                            <TrashIcon />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Delete confirmation?</DialogTitle>
                            <DialogDescription>
                              Make sure you want to delete <b>{d.title}</b>?
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter className="mt-5">
                            <Button
                              onClick={() => {
                                deleteProject(d.id);
                              }}
                              variant={"destructive"}
                            >
                              {loading ? (
                                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                              ) : (
                                "Delete"
                              )}
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                )
              )}
            </>
          ) : (
            <h1>No data found</h1>
          )}
        </>
      )} */}
      <h1>Segera Hadir</h1>
    </>
  );
}
