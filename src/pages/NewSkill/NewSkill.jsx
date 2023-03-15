import { useState } from 'react';
import { createSkill } from '../../services/skillService'

function NewSkill() {
  const [form, setForm] =useState({
    content: '',
  })

  const handleAddSkill = async (skillData) => {
    const newSkill = await createSkill(skillData)
    setSkills([newSkill, ...skills])
    navigate('/skills')
  }

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddSkill(form)
  }

  return (
    <div>
      <h2>Add New Skill</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="skillName">Skill Name:</label>
        <input
          type="text"
          name="skillName"
          id="skillName-input"
          value={form.content}
          required
          placeholder="Add Skill"
          onChange={handleChange}
        />
        <button type="submit">Add Skill</button>
      </form>
    </div>
  );
}

export default NewSkill;
