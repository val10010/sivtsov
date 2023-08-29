import React from 'react';
import Button from 'Components/Button';
import { innerServices } from 'Services';
import { useForm } from 'react-hook-form';
import Checkbox from 'Components/Checkbox';
import Textarea from 'Components/Textarea';
import TextInput from 'Components/TextInput';
import RadioButton from 'Components/RadioButton';

import style from './style.scss';

export const RecordForInterview = ({ fromPage = 'зі сторінки вакансий', vacancyName, btnOnClick }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid, touchedFields, dirtyFields, isSubmitting },
    } = useForm({ mode: 'onChange' });

    const onSubmit = async (data) => {
        const res =  await innerServices.sendUserData({
            formName: 'Запис на співбесіду',
            vacancyName,
            fromPage,
            ...data
        });

        if (res.success) {
            reset();
            btnOnClick && btnOnClick();
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}  className={style.form} >
                <h4 className={style.title}>Запис на співбесіду</h4>
                <div className={style.content}>
                    <div className={style.block}>
                        <TextInput
                            className={style.input}
                            placeholder="Призвище Ім’я*"
                            isError={errors?.name?.message}
                            isValid={touchedFields?.name && !errors?.name && dirtyFields.name}
                            {...register('name', { required: 'Заповнить це поле' })}
                        />
                        <p className={style.messengersTitle}>Оберіть месенджер для зв'язку*</p>
                        <div className={style.messengers}>
                            {errors?.experience?.message && (
                                <div className={style.errorMessage}>
                                    { errors.experience.message }
                                </div>
                            )}
                            <RadioButton
                                value="Telegram"
                                registerProps={register('messenger', { required: 'Це поле обов\'язкове' })}
                            />
                            <RadioButton
                                value="Viber"
                                registerProps={register('messenger', { required: 'Це поле обов\'язкове' })}
                            />
                            <RadioButton
                                value="WhatsApp"
                                registerProps={register('messenger', { required: 'Це поле обов\'язкове' })}
                            />
                        </div>
                        <TextInput
                            placeholder="Телефон або нікнейм з месенджера*"
                            className={style.input}
                            isError={errors?.phone?.message}
                            isValid={touchedFields?.phone && !errors?.phone && dirtyFields.phone}
                            {...register('phone', {
                                required: 'Заповнить це поле'
                            })}
                        />
                    </div>
                    <div className={style.block}>
                        <Textarea
                            placeholder="Коментар, досвід, матеріали які використовуєте у роботі* "
                            {...register('comment', {
                                required: 'Заповнить це поле'
                            })}
                        />
                        <Checkbox
                            className={style.checkbox}
                            isError={errors?.consent?.message}
                            registerProps={register('consent', { required: 'Це поле обов\'язкове' })}
                        >
                            даю згоду на обробку своїх персональних даних.
                            Підтверджую, що ознайомлений з Політикою обробки персональних даних
                        </Checkbox>
                    </div>

                </div>
                <Button
                    variant="primary"
                    className={style.button}
                    disabled={!isValid || isSubmitting}
                >
                    Відправити
                </Button>
            </form>
        </>

    );
};

export default RecordForInterview;
