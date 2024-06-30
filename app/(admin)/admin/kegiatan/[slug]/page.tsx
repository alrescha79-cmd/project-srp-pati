'use client';

import BlogForm from "@/components/BlogForm";
import { useEffect, useReducer } from "react";

interface ParamProps {
    slug: string;
}

interface BlogDetailPageProps {
    params: ParamProps;
}

interface ResponseState {
    loading: boolean;
    data: any;
    error?: string;
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
    const [response, setResponse] = useReducer(
        (prev: ResponseState, next: Partial<ResponseState>) => ({ ...prev, ...next }),
        {
            loading: true,
            data: {},
        }
    );

    const fetchBlog = async () => {
        try {
            const res = await fetch(`/api/kegiatan?id=${params.slug}`);
            const result = await res.json();

            setResponse({ data: result.data, loading: false });
        } catch (error) {
            setResponse({ error: 'Gagal memuat Data', loading: false });
        }
    };

    useEffect(() => {
        fetchBlog();
    }, [params.slug]);

    if (response.loading) {
        return <h1>Loading...</h1>;
    }

    if (response.error) {
        return <h1>{response.error}</h1>;
    }

    return <BlogForm id={params.slug} value={response.data} />;
}
