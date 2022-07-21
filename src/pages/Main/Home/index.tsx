/* eslint-disable no-alert */
import React, { useCallback, useState } from 'react';

import { api } from '@services/api';
import { getFirstAndLastDatesFromDate } from '@utils/getFirstAndLastDatesFromDate';

import { Container, Summary } from './styles';

interface ISummary {
  start: Date;
  end: Date;
  hours: {
    null: string;
    productive: string;
    unproductive: string;
    undefined: string;
    passiveGain: string;
    total: string;
    totalGain: string;
  };
  realtime: {
    info: string;
    productive: string;
    unproductive: string;
    undefined: string;
    passive: string;
    total: string;
    totalGain: string;
  };
  billing: number;
  billingFormatted: string;
  goal: {
    hours: string;
    workingHours: string;
    missing: string;
    ahead: string;
  };
}

const Home: React.FC = () => {
  const keySuffix = 'activtrak#devstream';

  const [summary, setSummary] = useState<ISummary | undefined>(() => {
    const founded = localStorage.getItem(`${keySuffix}:summary`);

    return founded ? JSON.parse(founded) : undefined;
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string | undefined>(() => {
    const founded = localStorage.getItem(`${keySuffix}:@username`);

    return founded || undefined;
  });
  const [password, setPassword] = useState<string | undefined>(() => {
    const founded = localStorage.getItem(`${keySuffix}:@password`);

    return founded || undefined;
  });
  const [cost, setCost] = useState<number>(() => {
    const founded = localStorage.getItem(`${keySuffix}:@cost`);

    return founded ? Number(founded) : 0;
  });

  const handleSearch = useCallback(async () => {
    setIsLoading(true);

    const [start, end] = getFirstAndLastDatesFromDate(new Date());

    const params = [
      `start=${start.toISOString().split('T')[0]}`,
      `end=${end.toISOString().split('T')[0]}`,
      `value=${cost}`,
      `goalFilter=productive,undefined,passiveGain`,
    ];

    const { data } = await api.post<ISummary>(
      `/activtrak?${params.join('&')}`,
      { email: username, password },
    );

    setIsLoading(false);
    setSummary(data);

    localStorage.setItem(`${keySuffix}:@summary`, JSON.stringify(data));
  }, [cost, password, username]);

  const handleUpdate = useCallback(async () => {
    setSummary({
      start: new Date(),
      end: new Date(),
      hours: {
        null: '',
        productive: '',
        unproductive: '',
        undefined: '',
        passiveGain: '',
        total: '',
        totalGain: '',
      },
      realtime: {
        info: '',
        productive: '',
        unproductive: '',
        undefined: '',
        passive: '',
        total: '',
        totalGain: '',
      },
      billing: 0,
      billingFormatted: '',
      goal: {
        hours: 'Carregando...',
        workingHours: 'Carregando...',
        missing: 'Carregando...',
        ahead: 'Carregando...',
      },
    });

    await handleSearch();
  }, [handleSearch]);

  const handleLogout = useCallback(async () => {
    setSummary(undefined);

    localStorage.removeItem(`${keySuffix}:@username`);
    localStorage.removeItem(`${keySuffix}:@password`);
    localStorage.removeItem(`${keySuffix}:@cost`);
    localStorage.removeItem(`${keySuffix}:@summary`);
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      try {
        e.preventDefault();

        handleSearch();

        if (username) localStorage.setItem(`${keySuffix}:@username`, username);
        if (password) localStorage.setItem(`${keySuffix}:@password`, password);
        if (cost) localStorage.setItem(`${keySuffix}:@cost`, String(cost));
      } catch {
        alert('Erro no login');

        setIsLoading(false);
      }
    },
    [cost, handleSearch, password, username],
  );

  const normalizeHours = (hours: string) => {
    const array = hours.split(':');

    if (array.length === 3) {
      return `${array[0]}:${array[1]}:${array[2].substring(0, 2)}`;
    }

    return hours;
  };

  if (summary && username && password && cost) {
    return (
      <Summary>
        <strong>Resumo</strong>

        <div>
          <strong>Meta de horas trabalhadas: </strong>
          <span>{normalizeHours(summary?.goal.hours)}</span>
        </div>

        <div>
          <strong>Horas trabalhadas: </strong>
          <span>{normalizeHours(summary?.goal.workingHours)}</span>
        </div>

        <div>
          <strong>Horas atrás da meta: </strong>
          <span>{normalizeHours(summary?.goal.missing)}</span>
        </div>

        <div>
          <strong>Horas á frente da meta: </strong>
          <span>{normalizeHours(summary?.goal.ahead)}</span>
        </div>

        <div>
          <strong>Salário: </strong>
          <span>{summary?.billingFormatted}</span>
        </div>

        <button type="button" onClick={handleUpdate} disabled={isLoading}>
          {isLoading ? 'Atualizando...' : 'Atualizar'}
        </button>

        <button type="button" onClick={handleLogout} disabled={isLoading}>
          Sair
        </button>
      </Summary>
    );
  }

  return (
    <Container onSubmit={handleSubmit}>
      <strong>Login</strong>

      <div>
        <label htmlFor="username">Username *</label>
        <input
          name="username"
          type="email"
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
      </div>

      <div>
        <label htmlFor="password">Senha *</label>
        <input
          name="password"
          type="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <div>
        <label htmlFor="cost">Valor hora *</label>
        <input
          name="cost"
          type="number"
          onChange={e => setCost(Number(e.target.value))}
          value={cost}
        />
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Entrando...' : 'Entrar'}
      </button>
    </Container>
  );
};

export { Home };
