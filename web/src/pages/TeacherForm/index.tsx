import React from 'react';

import PageHeader from '../../componets/PageHeader';
import Input from '../../componets/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../componets/Textarea';

import './styles.css';
import Select from '../../componets/Select';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário"
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Biografia" />

        </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>

          <Select
            name="subject"
            label="Matéria"
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
          <Input name="cost" label="Custo da sua hora por aula" />

        </fieldset>

        <fieldset>
          <legend>
            Horários Disponíveis
            <button type="button">
              + Novo horário
            </button>
          </legend>
          <Select
            name="week-day"
            label="Dia da Semana"
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
          
          <Input name="from" label="Das" type="time" />
          <Input name="to" label="Até" type="time" />

        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados!
          </p>
            <button type="button">
              Salvar Cadastro
            </button>
        </footer>
      </main>

    </div>
  )
}

export default TeacherForm;
