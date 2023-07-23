import json from '../../json/db.json'

function Select({label, event}) {

    const options = json.categories

    return (
        <div>
            <label>{label}:
                <select onChange={(e) =>  event(e.target.value)} required="required">
                    <option value=''>Selecione uma opção</option>
                    {options.map(({name, id}) => (
                        <option key={id} value={name}>{name}</option>
                    )
                    )}
                </select>
            </label>
        </div>
    )
}

export default Select