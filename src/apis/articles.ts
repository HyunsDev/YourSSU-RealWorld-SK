import { ArticleParams, ArticleResponse } from '@src/types/articles';
import { getAsync } from './common';

export async function getArticles(path: string, params?: ArticleParams) {
  const response = await getAsync<ArticleResponse, undefined>(path, {
    params: {
      ...params,
    },
  });
  return response;
}