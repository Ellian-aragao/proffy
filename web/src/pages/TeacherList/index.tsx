import React, { FormEvent, useState } from 'react';
import TeacherItem, { Teacher } from '../../componets/TeacherItem';
import PageHeader from '../../componets/PageHeader';
import Input from '../../componets/Input';
import Select from '../../componets/Select';
import api from '../../services/api';

import './styles.css';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });
    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => { setSubject(e.target.value) }}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Espanhol', label: 'Espanhol' },
              { value: 'Filosofia', label: 'Filosofia' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Inglês', label: 'Inglês' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
              { value: 'Sociologia', label: 'Sociologia' },
            ]}
          />

          <Select
            name="week-day"
            label="Dia da Semana"
            value={week_day}
            onChange={(e) => { setWeekDay(e.target.value) }}
            options={[
              { value: '0', label: 'domingo' },
              { value: '1', label: 'segunda-feira' },
              { value: '2', label: 'terça-feira' },
              { value: '3', label: 'quarta-feira' },
              { value: '4', label: 'quinta-feira' },
              { value: '5', label: 'sexta-feira' },
              { value: '6', label: 'sábado' },
            ]}
          />

          <Input
            name="time"
            label="Hora"
            type="time"
            value={time}
            onChange={(e) => { setTime(e.target.value) }}
          />
          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teachers: Teacher) => {
          return (<TeacherItem key={teachers.id} teacher={teachers} />);
        })}
      </main>
    </div>
  );
}
export default TeacherList;
