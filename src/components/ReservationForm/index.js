import React from 'react';
import Button from  'Components/Button';
import { innerServices } from 'Services';
import { useForm } from 'react-hook-form';
import Textarea from 'Components/Textarea';
import Checkbox from 'Components/Checkbox';
import TextInput from 'Components/TextInput';
import RadioButton from 'Components/RadioButton';

import style from './style.scss';

export const ReservationForm = ({ title, price = '1500 грн. / 38€', className, btnOnClick }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid, touchedFields, dirtyFields, isSubmitting },
    } = useForm({ mode: 'onChange' });


    const onSubmit = async (data) => {
       const res =  await innerServices.sendUserData({
           formName: title,
           price,
           ...data
       });

       if (res.success) {
           reset();
           btnOnClick && btnOnClick();
       }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}  className={`${style.form} ${className || ''}`}>
                <h4 className={style.title}>{ title }</h4>
                <TextInput
                    className={style.input}
                    placeholder="Фамилия Имя*"
                    isError={errors?.name?.message}
                    isValid={touchedFields?.name && !errors?.name && dirtyFields.name}
                    {...register('name', { required: 'Заполните это поле' })}
                />
                <p className={style.radioBtnsTitle}>Выберите мессенджер для связи*</p>
                <div className={style.radioBtns}>
                    {errors?.experience?.message && (
                        <div className={style.errorMessage}>
                            { errors.experience.message }
                        </div>
                    )}
                    <RadioButton
                        value="Telegram"
                        registerProps={register('messenger', { required: 'Это поле обязательное' })}
                    />
                    <RadioButton
                        value="Viber"
                        registerProps={register('messenger', { required: 'Это поле обязательное' })}
                    />
                    <RadioButton
                        value="WhatsApp"
                        registerProps={register('messenger', { required: 'Это поле обязательное' })}
                    />
                </div>
                <TextInput
                    placeholder="Телефон или никнейм с месенджера* "
                    className={style.input}
                    isError={errors?.phone?.message}
                    isValid={touchedFields?.phone && !errors?.phone && dirtyFields.phone}
                    {...register('phone', {
                        required: 'Это поле обязательное'
                    })}
                />
                <Textarea
                    placeholder="Коментарий"
                    {...register('comment')}
                />
                <Button className={style.button} disabled={!isValid || isSubmitting}>
                    Подать заявку
                </Button>
                <Checkbox
                    isError={errors?.consent?.message}
                    registerProps={register('consent', { required: 'Это поле обязательное' })}
                >
                    Даю согласие на оброботку своих персональных данных.
                    Подтверждаю, что ознакомился с Политекой оброботки персональных данных.
                </Checkbox>
                <div className={style.total}>
                    <span>Всего:</span>
                    <span className={style.price}>{ price }</span>
                </div>
            </form>
        </>
    );
};

export default ReservationForm;
