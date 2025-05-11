import { useEffect } from 'react';
import { useParams } from 'react-router';

export function useApp() {
  const { genre } = useParams();

  useEffect(() => {
    if (genre) {
      window.document.title = `Movies - ${genre}`;
    } else {
      window.document.title = `Movies`;
    }
  }, [genre]);
}
